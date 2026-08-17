function switchView(viewId, element) {
    const views = document.querySelectorAll('.view-section');
    views.forEach(v => v.classList.remove('active'));
    
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(m => m.classList.remove('active'));
    
    document.getElementById(viewId).classList.add('active');
    element.classList.add('active');
}

function createNewOrder() {
    const tableNo = prompt("กรอกหมายเลขโต๊ะที่ต้องการเปิด (เช่น T04):");
    if (tableNo) {
        alert(`เปิดโต๊ะ ${tableNo} สำหรับลูกค้าเรียบร้อยแล้วค่ะ!`);
    }
}

function checkoutTable(tableId) {
    if (confirm(`ต้องการคิดเงินและปิดโต๊ะ ${tableId} ใช่หรือไม่?`)) {
        alert(`ปิดโต๊ะ ${tableId} สำเร็จ ส่งต่อให้พนักงานทำความสะอาดโต๊ะต่อไป`);
    }
}

function addTable() {
    alert("เพิ่มโต๊ะอาหารใหม่เข้าระบบเรียบร้อย!");
}

function reportClean() {
    alert("แจ้งเตือนพนักงานทำความสะอาดประจำโซนแล้ว!");
}

function finishClean(tableId) {
    alert(`โต๊ะ ${tableId} ทำความสะอาดเรียบร้อย พร้อมรับลูกค้าใหม่!`);
}

function finishServe(tableId) {
    alert(`เสิร์ฟอาหารให้ ${tableId} สำเร็จ`);
}

function calculateOT() {
    alert("คำนวณเบี้ยขยันและ OT รอบเดือนนี้เรียบร้อยแล้ว!");
}                     