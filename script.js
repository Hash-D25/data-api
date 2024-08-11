const table=document.querySelector('.js-table');
function addDataRowsToHtml(data){
    data.forEach(element => {
        const html=`<tr>
                        <td>${element.id}</td>
                        <td>${element.email}</td>
                        <td>${element.first_name}</td>
                        <td>${element.last_name}</td>
                        <td><img src="${element.avatar}" alt="Avatar" class="avatar"></td>
                      </tr>`;
        table.insertAdjacentHTML('beforeend',html);
    });
}
const getdata= async () =>{
    try{
        const response= await fetch('https://reqres.in/api/users');
        const users= await response.json();
        if(!response.ok){
            console.log('Failed to fetch data:', response.description);
            return;
        }
        addDataRowsToHtml(users.data);
        
    }
    catch(error){
        console.log('Unexpected error: ',error);
    }
}
getdata();

