import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='footer'>
         <section>
            <ul>
             <li>
                 <a href='facebook.com' target={'_blank'}>
                     <img src='./imagens/fb.png' alt='Facebook da organo'/>
                 </a>
             </li>
             <li>
                 <a href='twiter.com' target={'_blank'}>
                     <img src='./imagens/tw.png' alt='Twiter da organo'/>
                 </a>
             </li>
             <li>
                 <a href='instagram.com' target={'_blank'}>
                     <img src='./imagens/ig.png' alt='Instagram da organo'/>
                 </a>
             </li>
         </ul> 
         </section>
         <section>
            <img src='./imagens/logo.png' alt='logo da organo'/> 
         </section>
         <section>
           <p>Desenvolvido por Matheus</p>  
         </section>
     </footer>
 )
}


export default Rodape