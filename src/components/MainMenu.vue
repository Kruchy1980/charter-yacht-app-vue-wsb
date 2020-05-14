<template>
<header class="main_header primary_color">
    <div class="main_header_nav">
        <a :href=mainUrl ><img :src=logoUrl alt="logo" class="nav_logo"></a>
        <button type="button" class="nav_toggler" v-on:click="showMobileMenu()">
            <i class="fas fa-bars fa-lg" v-show="isMobileMenuClicked"></i>
            <i class="fas fa-times fa-lg " v-show="!isMobileMenuClicked"></i>
        </button>  
        <nav class="hide">
            <ul class="nav_menu">
                <li><router-link to="/" class="nav_link primary_color">Strona główna</router-link></li>
                <li>
                    <a type="button" class="nav_link primary_color" v-on:click="expandMenuCharter($event)">Czartery jachtów 
                        <i class="fas fa-caret-down" v-show="!isExpanded"></i>
                        <i class="fas fa-caret-up" v-show="isExpanded"></i>
                    </a>
                    <ul class="nav_dropdown hide">
                        <li><a href="" class="nav_link primary_color">Jachty żaglowe</a></li>
                        <li><a href="" class="nav_link primary_color">Jachty motorowe</a></li>
                        <li><a href="" class="nav_link primary_color">Katamarany żaglowe</a></li>
                        <li><a href="" class="nav_link primary_color">Katamarany motorowe</a></li>
                    </ul>
                </li>
                <li><router-link to="/contact" class="nav_link primary_color">Kontakt</router-link></li>
                <li><router-link to="/about" class="nav_link primary_color">O Nas</router-link></li>
                <li><a href="" class="nav_link primary_color">
                    <i class="fas fa-user-circle fa-lg"></i>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</header>
</template>


<script>
export default {
    data(){
        return{
            mainUrl: '/',
            logoUrl: '/bookmark-icon/1.blue.svg',
            isMobileMenuClicked: true,
            isExpanded: false,
        }
    },
    methods: {
        showMobileMenu(){ 
            this.isMobileMenuClicked=!this.isMobileMenuClicked; 
            let nav = document.getElementsByTagName('nav')[0];
            nav.classList.toggle('show');
            },
        expandMenuCharter(e){
            this.isExpanded=!this.isExpanded;
            let ul = e.target.nextSibling
            ul.classList.toggle('show');
        }
    }
}
</script>

<style scoped>
ul{
    margin: 0;
    padding: 0;
    list-style: none;
}
ul a{
    text-decoration: none;
}
nav{
    flex-basis: 100%;
} 
li{
    padding-left: .5rem;
    margin-top: .5rem;
}
.nav_link{
    padding: .25rem;
    border: solid 1px transparent;
    transition: all .5s;
}
.nav_link:hover{
    cursor: pointer;
    border-radius: 7px;
    border-left: solid 1px rgba(60, 84, 180,.6);
    border-right: solid 1px rgba(60, 84, 180,.6);
    color: rgba(60, 84, 180,.6);
}
.nav_toggler{
    height: 2rem;
    width: 2rem;
    margin: auto 0 auto auto;
    color: rgba(60, 84, 180,.5);
    border-color: rgba(0,0,0,.1);
    border-radius: 4px;
    cursor: pointer;
    display: inline-block;
    text-align: center;
    transition: all .5s;
}
.nav_menu{
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: .5rem;
}
.nav_dropdown{
    position: static;
    width: fit-content;
    padding: 3px;
    border-radius: 7px;
    border-bottom: 1px solid rgb(102,102,102, .2);
    background-color: rgb(254, 254, 254);
}
.main_header{
    margin: 0px;
    padding: 0px;
    position: relative;
    top: 0px;
    width: 100%;
    background-color: rgb(254, 254, 254);
    display: flex;
    border-bottom: 1px solid rgb(102,102,102, .2);
}
.main_header_nav{
    margin: 0 auto;
    width: 1200px;
    max-width: 90%;
    display: flex;
    flex-wrap: wrap;
}
.nav_logo{
    display: inline-block;
    padding-top: .3rem;
    padding-bottom: .3rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;
    height: 3rem;
}
.hide:not(.show){
    display: none;
}

/* szkielet dla różnych wyświetlaczy */
@media (min-width: 640px){

}
 
@media (min-width: 768px){
    nav{
        margin: auto 5% auto auto;
        display: inherit !important;
        flex-basis: auto;
    }
    li{
        margin-top: 0.25rem;
        margin-bottom: .25rem;
    }
    .main_header_nav{
        flex-direction: row;
        flex-wrap: nowrap;
    }
    .nav_toggler{
        display: none;
    }
    .nav_menu{
        display: flex;
        flex-direction: row;
    }
    .nav_dropdown{
        position: absolute;
        width: auto;
    }
}
 
@media (min-width: 1024px){
    
}
 
@media (min-width: 1200px){

}

</style>