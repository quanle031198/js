function doCheck(id) 
{
   let good = document.getElementById('good');
  
   let cheap = document.getElementById('cheap');

   let fast = document.getElementById('fast');
  
  
    if (id === 'good' && cheap.checked && fast.checked) {
        fast.checked =false;
    }else if (id === 'fast' && good.checked && cheap.checked)
        cheap.checked = false;
      else if (id === 'cheap' && good.checked && fast.checked) {
        good.checked = false;
      }
} 