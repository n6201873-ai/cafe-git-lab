function switchView(viewId, element) {
    const views = document.querySelectorAll('.view-section');
    views.forEach(v => v.classList.remove('active'));
    
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(m => m.classList.remove('active'));
    
    document.getElementById(viewId).classList.add('active');
    element.classList.add('active');
}

function createNewOrder() {
    const tableNo = prompt("กรอกหมายเลขโต๊ะที่ต้องการเปิดใหม่ (เช่น T04):");
    if (tableNo) {
        alert(`เปิดโต๊ะ ${tableNo} สำเร็จ เตรียมต้อนรับลูกค้าและน้องแมวกันเลย!`);
    }
}

function checkoutTable(tableId) {
    if (confirm(`ยืนยันการคิดเงินและปิดโต๊ะ ${tableId} ใช่หรือไม่?`)) {
        alert(`ปิดโต๊ะ ${tableId} เรียบร้อย ส่งข้อมูลให้พนักงานทำความสะอาดต่อไป`);
    }
}

function addTable() {
    alert("เพิ่มโต๊ะอาหารใหม่เข้าระบบสำเร็จ!");
}

function reportClean() {
    alert("ส่งสัญญาณแจ้งเตือนพนักงานทำความสะอาดประจำโซนเรียบร้อย!");
}

function finishClean(tableId) {
    alert(`โต๊ะ ${tableId} ทำความสะอาดเสร็จสิ้น พร้อมรับลูกค้าใหม่แล้วค่ะ!`);
}

function finishServe(tableId) {
    alert(`อัปเดตสถานะเสิร์ฟเมนูให้โต๊ะ ${tableId} สำเร็จ`);
}

function calculateOT() {
    alert("ระบบประมวลผลเบี้ยขยันและค่าล่วงเวลา (OT) รอบนี้เรียบร้อยแล้ว!");
}