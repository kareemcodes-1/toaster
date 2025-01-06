function Toaster(type){
   return showDialog(type);
}

function showDialog(type){
    const toast = document.createElement('div');
    if(type === 'success'){
        toast.innerHTML = `
        <div class="toaster">
           <h1>Success 👏<h1/>
        </div>
       `;
    }else{
        toast.innerHTML = `
        <div class="toaster">
           <h1>Error 👏<h1/>
        </div>
       `;
    }
        document.body.appendChild(toast);
        setTimeout(() => {
            document.body.removeChild(toast)
        }, 1000)
}