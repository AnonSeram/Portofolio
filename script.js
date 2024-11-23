
document.addEventListener("DOMContentLoaded", () => {
    const line1 = document.getElementById("line1");
    const line2 = document.getElementById("line2");
    const line3 = document.getElementById("line3");
    const line4 = document.getElementById("line4");

    // Teks yang akan diketik
    const text1 = "Hi,";
    const text2 = "My name is";
    const text3 = "Abduh";
    const text4 = "Build your idea and develop your creativity with me";

    let i = 0;

    // Fungsi untuk mengetik teks baris pertama
    function typeLine1() {
        if (i < text1.length) {
            line1.textContent += text1.charAt(i);
            i++;
            setTimeout(typeLine1, 100); // Kecepatan mengetik (100ms per karakter)
        } else {
            i = 0;
            setTimeout(typeLine2, 500); // Tunggu sebelum teks kedua muncul
        }
    }

    // Fungsi untuk mengetik teks baris kedua
    function typeLine2() {
        if (i < text2.length) {
            line2.textContent += text2.charAt(i);
            i++;
            setTimeout(typeLine2, 100); // Kecepatan mengetik (100ms per karakter)
        } else {
            i = 0;
            setTimeout(typeLine3, 500); // Tunggu sebelum teks ketiga muncul
        }
    }

    // Fungsi untuk mengetik teks baris ketiga
    function typeLine3() {
        if (i < text3.length) {
            line3.textContent += text3.charAt(i);
            i++;
            setTimeout(typeLine3, 100); // Kecepatan mengetik (100ms per karakter)
        } else {
            i = 0;
            setTimeout(typeLine4, 500); // Tunggu sebelum teks keempat muncul
        }
    }

    // Fungsi untuk mengetik teks baris keempat
    function typeLine4() {
        if (i < text4.length) {
            line4.textContent += text4.charAt(i);
            i++;
            setTimeout(typeLine4, 50); // Kecepatan mengetik (50ms per karakter)
        }
    }

    // Mulai efek typing dari baris pertama
    typeLine1();
});


emailjs.init("RRB_wzGgpjd22qTIx"); // Ganti "YOUR_USER_ID" dengan User ID dari EmailJS

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();

  // Send email with form data
  emailjs.send("service_kaagw2s", "template_4duevhk", {
    from_name: document.getElementById("nama").value,
    from_email: document.getElementById("email").value,
    message: document.getElementById("message").value
  })
  .then(function(response) {
    // Show success message with SweetAlert2
    Swal.fire({
      icon: 'success',
      title: 'Pesan Berhasil Dikirim!',
      text: 'Kami telah menerima pesan Anda.',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OK'
    }).then((result) => {
      if (result.isConfirmed) {
        document.getElementById("contact-form").reset(); // Reset form fields
      }
    });

  }, function(error) {
    // Show error message with SweetAlert2
    Swal.fire({
      icon: 'error',
      title: 'Pesan Gagal Diwaro!',
      text: 'Silakan coba lagi nanti.',
      confirmButtonColor: '#d33',
      confirmButtonText: 'OK'
    });
  });
});

// Fungsi untuk menambahkan kelas 'visible' saat elemen masuk ke viewport
function handleScroll() {
    const fadeElements = document.querySelectorAll('.fade-effect');
    
    fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            el.classList.add('visible'); // Tambahkan kelas 'visible' saat elemen terlihat
        } else {
            el.classList.remove('visible'); // Hapus kelas 'visible' jika keluar dari viewport
        }
    });
}

// Jalankan fungsi saat halaman di-scroll
window.addEventListener('scroll', handleScroll);

// Jalankan fungsi sekali untuk memastikan efek fade diterapkan saat pertama kali dimuat
document.addEventListener('DOMContentLoaded', handleScroll);
