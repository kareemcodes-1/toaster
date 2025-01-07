
function showToaster(type){
        const toaster = document.querySelector('.toaster');
        toaster.innerHTML = `
           <div style="padding: 1rem;">
                <div style="display: flex; align-items: center; gap: .5rem;">
                    ${type === 'success' ? (`
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="width: 2rem; color: green; display: flex; align-items: center; justify-content:center;">
                     <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                    </svg>`
                    ) : (`
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="width: 2rem; color: red; display: flex; align-items: center; justify-content:center;">
                     <path fill-rule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
                     </svg>`
                    )}
                      <div>
                        <h1 style="font-size: 1.3rem;">${type === 'success' ? 'Success 👏' : 'Error ❌'}</h1>
                      <p style="font-size: .8rem;">This is a ${type === 'success' ? 'success' : 'error'} toaster.</p>
                      </div>
                </div>
             </div>

       `;
    
        document.querySelector('.toaster').classList.add('show');
        setTimeout(() => {
         document.querySelector('.toaster').classList.remove('show');
        }, 2000)
}