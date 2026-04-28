/* AI Catalyst Demo - 공통 스크립트 */

// 모바일 네비게이션 토글
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".nav-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", () => menu.classList.toggle("open"));
  }

  // 카드 hover 시 살짝 들어올리는 인터랙션은 CSS로 충분
  // 강의 신청 / 환급 신청 모달 트리거
  document.body.addEventListener("click", (e) => {
    const enrollBtn = e.target.closest("[data-action='enroll']");
    if (enrollBtn) {
      const title = enrollBtn.dataset.title || "강의";
      showModal({
        icon: "✓",
        title: "신청이 접수되었습니다",
        message: `"${title}"<br/>신청 완료 알림을 사내 메신저로 보내드렸습니다. 강사에게 5만원 이체 후 인증샷을 마이페이지에 업로드하면 회사가 환급해드립니다.`,
        confirm: "마이페이지로 이동",
        confirmHref: "mypage.html"
      });
    }

    const refundBtn = e.target.closest("[data-action='refund']");
    if (refundBtn) {
      showModal({
        icon: "↻",
        title: "환급 신청이 제출되었습니다",
        message: "운영팀 검토 후 영업일 기준 2일 내 환급됩니다. 진행 현황은 마이페이지에서 확인할 수 있습니다.",
        confirm: "확인"
      });
    }

    const modalClose = e.target.closest("[data-modal-close]");
    if (modalClose) hideModal();
  });

  // 필터 칩 토글 (강의 목록)
  document.querySelectorAll(".filter-bar").forEach((bar) => {
    bar.addEventListener("click", (e) => {
      const chip = e.target.closest(".filter-chip");
      if (!chip) return;
      bar.querySelectorAll(".filter-chip").forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      filterCourses(chip.dataset.filter);
    });
  });

  // 마이페이지 탭
  document.querySelectorAll(".tabs").forEach((tabs) => {
    tabs.addEventListener("click", (e) => {
      const tab = e.target.closest(".tab");
      if (!tab) return;
      tabs.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      const target = tab.dataset.tab;
      document.querySelectorAll("[data-tab-content]").forEach((c) => {
        c.style.display = c.dataset.tabContent === target ? "block" : "none";
      });
    });
  });
});

function showModal({ icon, title, message, confirm = "확인", confirmHref }) {
  let backdrop = document.querySelector(".modal-backdrop");
  if (!backdrop) {
    backdrop = document.createElement("div");
    backdrop.className = "modal-backdrop";
    document.body.appendChild(backdrop);
  }
  const confirmEl = confirmHref
    ? `<a href="${confirmHref}" class="btn btn-primary btn-sm">${confirm}</a>`
    : `<button class="btn btn-primary btn-sm" data-modal-close>${confirm}</button>`;
  backdrop.innerHTML = `
    <div class="modal">
      <div class="modal-icon">${icon}</div>
      <div class="modal-title">${title}</div>
      <div class="modal-msg">${message}</div>
      <div class="modal-actions">
        <button class="btn btn-outline btn-sm" data-modal-close>닫기</button>
        ${confirmEl}
      </div>
    </div>`;
  backdrop.classList.add("show");
  backdrop.addEventListener(
    "click",
    (e) => {
      if (e.target === backdrop) hideModal();
    },
    { once: true }
  );
}
function hideModal() {
  const b = document.querySelector(".modal-backdrop");
  if (b) b.classList.remove("show");
}

function filterCourses(filter) {
  document.querySelectorAll("[data-course-tag]").forEach((card) => {
    if (filter === "all") {
      card.style.display = "";
      return;
    }
    const tag = card.dataset.courseTag || "";
    card.style.display = tag.includes(filter) ? "" : "none";
  });
}

// 강의 카드 렌더링 (목록 / 홈 양쪽에서 사용)
function renderCourseCards(targetSelector, options = {}) {
  const target = document.querySelector(targetSelector);
  if (!target || !window.AC_DATA) return;
  const { limit, ids } = options;
  let courses = window.AC_DATA.courses;
  if (ids) courses = courses.filter((c) => ids.includes(c.id));
  if (limit) courses = courses.slice(0, limit);

  target.innerHTML = courses
    .map((c) => {
      const left = c.seats.total - c.seats.taken;
      const hot = left <= 2 && left > 0;
      const full = left === 0;
      const seatsLabel = full
        ? "마감"
        : `잔여 ${left}석${hot ? " · 마감 임박" : ""}`;
      return `
        <a href="course-detail.html?id=${c.id}" class="course-card" data-course-tag="${c.tag}">
          <div class="course-thumb ${c.thumb}">${c.icon}</div>
          <div class="course-body">
            <span class="course-tag">${c.tag}</span>
            <h3 class="course-title">${c.title}</h3>
            <div class="course-instructor">${c.instructor} · ${c.department}</div>
            <div class="course-meta">
              <span class="course-rating">★ ${c.rating} (${c.reviews})</span>
              <span class="course-seats ${hot || full ? "hot" : ""}">${seatsLabel}</span>
            </div>
          </div>
        </a>`;
    })
    .join("");
}
