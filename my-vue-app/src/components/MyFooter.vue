<template>
    <div class="footer-dark">
        <footer>
          <div class="container">
            <div class="row">
              <div class="col-sm-6 col-md-3">
                <h2>Services</h2>
                <ul>
                  <li><a href="#">Ventes</a></li>
                  <li><a href="#">Entretien</a></li>
                  <li><a href="#">Assurance</a></li>
                </ul>
              </div>
              <div class="col-sm-6 col-md-3">
                <h2>About</h2>
                <ul>
                  <li><a href="#">Company</a></li>
                  <li><a href="#"></a></li>
                  <li><a href="#"></a></li>
                  <li><a href="#"> </a></li>
                </ul>
              </div>
              <div class="col-md-3">
                <h2>Company Name</h2>
                <p>
                  DEK'S AUTO
                </p>
              </div>
              <div class="col-md-3">
                <h2>Contact</h2>
                  <p>N'hésitez pas à nous contacter !</p>
                  <p>Appelez-nous gratuitement dès maintenant</p>
                  <p>+33 7 53 64 30 34</p>
                  <p>(Prix d'un appel local)</p>
                  <p>Du lundi au samedi : 8h à 20h. Sauf dimanche et jours fériés</p>
                  <p>Ou envoyez-nous un mail à</p>
                  <p><a href="mailto:ndanychaste@gmail.com">ndanychaste@gmail.com</a></p>
              </div>
              <div>
                  <!--<div class="col item social">
                 <a href="#"><i class="icon ion-social-facebook">Test</i></a>
                <a href="#"><i class="icon ion-social-twitter"></i></a>
                <a href="#"><i class="icon ion-social-snapchat"></i></a>
                <a href="#"><i class="icon ion-social-instagram"></i></a>
                <a href="https://www.votre_url.com" class="fa fa-etsy"></a>-->
              
                <!--<a href="#"><font-awesome-icon :icon="['fab', 'facebook']" /></a>
                <a href="#"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
                <a href="#"><font-awesome-icon :icon="['fab', 'snapchat']" /></a>
                <a href="#"><font-awesome-icon :icon="['fab', 'instagram']" /></a>-->
                <a href="https://www.facebook.com/" ><img src="../assets/icons8-facebook-48.png"></a>
                <a href="https://www.instagram.com/"><img src="../assets/icons8-instagram-48.png" alt=""></a>
                <a href="https://www.twitter.com/"><img src="../assets/icons8-twitter-48.png" alt=""></a>
                <a href="https://www.youtube.com/"><img src="../assets/icons8-youtube-48.png" alt=""></a>
              </div>
            </div>
          </div>
          <p class="text-center">DEK'S AUTO © 2018</p>
        </footer>
      </div>
    
    
    <!-- Credit to https://epicbootstrap.com/snippets/footer-dark -->
    </template>
    
    
    <script>
    export default {
      name: 'MyFooter',
    }
    </script>
    
    <style scoped>
    
    .container{
      padding-top: 100px;
    }

    .icon{
      background-color: aquamarine;
    }
    
    .footer-dark {

      height : 100vh;
      padding-bottom: 100px;

      padding:50px 0;
      color:#f0f9ff;
      background-color:#282d32;
    }
    
    .footer-dark h3 {
      margin-top:0;
      margin-bottom:12px;
      font-weight:bold;
      font-size:16px;
    }
    
    .footer-dark ul {
      padding:0;
      list-style:none;
      line-height:1.6;
      font-size:14px;
      margin-bottom:0;
    }
    
    .footer-dark ul a {
      color:inherit;
      text-decoration:none;
      opacity:0.6;
    }
    
    .footer-dark ul a:hover {
      opacity:0.8;
    }
    
    @media (max-width:767px) {
      .footer-dark .item:not(.social) {
        text-align:center;
        padding-bottom:20px;
      }
    }
    
    .footer-dark .item.text {
      margin-bottom:36px;
    }
    
    @media (max-width:767px) {
      .footer-dark .item.text {
        margin-bottom:0;
      }
    }
    
    .footer-dark .item.text p {
      opacity:0.6;
      margin-bottom:0;
    }
    
    .footer-dark .item.social {
      text-align:center;
    }
    
    @media (max-width:991px) {
      .footer-dark .item.social {
        text-align:center;
        margin-top:20px;
      }
    }
    
    .footer-dark .item.social > a {
      font-size:20px;
      width:36px;
      height:36px;
      line-height:36px;
      display:inline-block;
      text-align:center;
      border-radius:50%;
      box-shadow:0 0 0 1px rgba(255,255,255,0.4);
      margin:0 8px;
      color:#fff;
      opacity:0.75;
    }
    
    .footer-dark .item.social > a:hover {
      opacity:0.9;
    }
    
    .footer-dark .copyright {
      text-align:center;
      padding-top:24px;
      opacity:0.3;
      font-size:13px;
      margin-bottom:0;
    }
    
    </style>
    