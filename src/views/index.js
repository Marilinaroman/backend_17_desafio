console.log('conectado');

const socketCliente = io();

//variables de productos
const nombre = document.getElementById('nombre')
const precio = document.getElementById('precio')
const url = document.getElementById('url')

const enviar = document.getElementById('enviar')
const detalleProducto = document.getElementById('detalleProducto')

// Envia datos de productos
if(enviar){
    enviar.addEventListener('click',()=>{
        socketCliente.emit('nuevoProducto',{
            producto: nombre.value,
            precio: precio.value,
            url:url.value

        })
        
    })

    //recibe los productos
    socketCliente.on('lista', (data) =>{
        let prod=''
        data.forEach(e => {
            prod += `<tr>
            <td>${e.producto}</td>
            <td>${e.precio}</td>
            <td><img src="${e.url}" alt="${e.producto}"> </td>
            </tr>`
        });
        detalleProducto.innerHTML = prod
    })

}


/*variables del chat
const msj = document.getElementById('msj')
const chatHistorico = document.getElementById('chatHistorico')
const enviarMsj = document.getElementById('enviarMsj')
let user,nombreUser,edad,alias,avatar

//desnormalizar
//autor
const autorSchema = new normalizr.schema.Entity('autor')
//msj
const msjSchema = new normalizr.schema.Entity('mensajes',{autor:autorSchema})
//esquema global
const chatSchema = new normalizr.schema.Entity('chat',{
    mensajes:[msjSchema]
},{idAttribute:'id'})

Swal.fire({
    title: 'Bienvenido/a',
    text:'Ingrese su Email',
    html: `<input type="text" id="email" class="swal2-input" placeholder="Correo" required>
    <input type="text" id="nombreUser" class="swal2-input" placeholder="Nombre" required>
    <input type="number" id="edad" class="swal2-input" placeholder="Edad" required>
    <input type="text" id="alias" class="swal2-input" placeholder="Alias" required>
    <input type="text" id="avatar" class="swal2-input" placeholder="Avatar" required>`,
    confirmButtonText: 'Continuar',
    allowOutsideClick: false,
    preConfirm: () => {
        const email = Swal.getPopup().querySelector('#email').value;
        const nombreUser = Swal.getPopup().querySelector('#nombreUser').value;
        const alias = Swal.getPopup().querySelector("#alias").value;
        const edad = Swal.getPopup().querySelector("#edad").value;
        const avatar = Swal.getPopup().querySelector("#avatar").value;
        if (!email || !nombreUser || !alias || !edad||!avatar) {
            Swal.showValidationMessage(`complete el formulario`);
        }
        return { email, nombreUser, alias, edad,avatar}
    },
}).then(res=>{
    user=res.value.email
    nombreUser=res.value.nombreUser
    edad=res.value.edad
    alias=res.value.alias
    avatar=res.value.avatar

    return user,nombreUser,edad,alias,avatar

})


if(msj){
    enviarMsj.addEventListener('click',e=>{
        socketCliente.emit('nuevoMsj',{
            id: user,
            nombre:nombreUser,
            edad:edad,
            alias:alias,
            avatar:avatar,
            texto: msj.value,
            hora: new Date()
        })
        msj.value=''
    })
    
    //recibe los msj
    socketCliente.on('chat', async (data)=>{
        console.log(data);
        const normalData = await normalizr.denormalize(data.result,chatSchema,data.entities)
        console.log(normalData);
        let elemento = ''
        normalData.mensajes.forEach(e => {

            elemento += `<p class='text-success'><strong class='text-primary'>${e.autor.id}</strong> <strong class='text-danger'>${e.hora}</strong>: ${e.texto}</p>`
        });
        chatHistorico.innerHTML = elemento
    })
}*/
