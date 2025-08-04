// File ini untuk penghubung antara UI HTML dan model User

document.addEventListener("DOMContentLoaded", () => {
  //membuat tanggal yang diharapkan berformat 'yyyy-mm-dd'
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  const taskForm = document.getElementById("taskForm");
  const taskManager = new Task();

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const taskData = {
      taskName: document.getElementById("taskName").value,
      taskPriority: document.getElementById("taskPriority").value,
      createdAt: `${year}-${month}-${day}`,
    };

    const result = taskManager.saveTasks(taskData);

    if (result.success) {
      // return (window.location.href = "../signin.html");
      alert("Berhasil disimpan");
    } else {
      console.log("Proses simpan data gagal");
    }
  });
});
