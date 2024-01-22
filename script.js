

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
      document.getElementById('popup').style.display = 'block';
    }, 1000);
  });

  document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
  });

  window.addEventListener('click', function(event) {
    var popup = document.getElementById('popup');
    if (event.target == popup) {
      popup.style.display = 'none';
    }
  });




  document.addEventListener('DOMContentLoaded', function() {
    const targetDate = new Date('March 11, 2024 18:00:00').getTime();

    function updateCountdown() {
      const currentDate = new Date().getTime();
      const timeDifference = targetDate - currentDate;

      if (timeDifference <= 0) {
        document.getElementById('bulan').innerText = '00';
        document.getElementById('hari').innerText = '00';
        document.getElementById('jam').innerText = '00';
        document.getElementById('menit').innerText = '00';
        document.getElementById('detik').innerText = '00';
        document.querySelector('.judul h1').innerText = 'Selamat Ramadhan!!!';
        document.getElementById('kata').innerText ='Selamat Ramadhan Semua!!'
        const body = document.body;
        body.style.background =
          'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW2sF8PPZaZ6KOpdDTnDfWzIWvUMJs1CkYzg&usqp=CAU")';
        body.style.background_repeat = 'no-repeat';
        body.style.background_size = 'cover';
        const judul = document.querySelector('.judul');
        judul.style.background = 'transparent';
        document.getElementById('duar').style.display ='block';
        document.getElementById('hshs').innerText = ' Alhamdulillah Ramadhan Tiba!!!';
         document.getElementById('psps').innerText = 'Gimana² Aman Puasa Kaga Ada Yang bolong hehhee'
      } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById('bulan').innerText = '00';
        document.getElementById('hari').innerText = days < 10 ? '0' + days : days;
        document.getElementById('jam').innerText = hours < 10 ? '0' + hours : hours;
        document.getElementById('menit').innerText = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById('detik').innerText = seconds < 10 ? '0' + seconds : seconds;
         document.getElementById('duar').style.display ='none'
         document.getElementById('hshs').innerText = 'Siapp Puasa Broooo!!!';
         document.getElementById('psps').innerText = 'Latih Javascript Dengan Membuat Web Sederhana Yaitu Web Ramadhan'
      }
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
  });

  