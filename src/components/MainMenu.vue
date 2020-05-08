<template>
<header class="main-header primary-color">
    <div class="main-header-nav">
        <a :href=mainUrl ><img :src=logoUrl alt="logo" class="nav-logo"></a>
        <button type="button" class="nav-toggler"><i class="fas fa-bars fa-lg"></i><i class="fas fa-times fa-lg "></i></button>  
        <nav>
            <ul class="nav-menu">
                <li><a href="" class="nav-link primary-color">Strona główna</a></li>
                <li>
                    <a href="" class="nav-link primary-color">Czartery jachtów</a>
                    <!-- <ul>
                        <li><a href="">Jachty żaglowe</a></li>
                        <li><a href="">Jachty motorowe</a></li>
                        <li><a href="">Katamarany żaglowe</a></li>
                        <li><a href="">Katamarany motorowe</a></li>
                    </ul> -->
                </li>
                <li><a href="" class="nav-link primary-color">Kontakt</a></li>
                <li><a href="" class="nav-link primary-color">O Nas</a></li>
                <li><a href="" class="nav-link primary-color"><i class="fas fa-user-circle fa-lg"></i></a></li>
            </ul>
        </nav>
    </div>
</header>
</template>


<script>
export default {
    data(){
        return{
            mainUrl: '',
            logoUrl: './bookmark-icon/1.blue.svg',
        }
    }
}
</script>

<style scoped>
nav{
    margin: auto 5% auto auto;
}
ul{
    margin: 0;
    padding: 0;
    list-style: none;
}
ul a{
    text-decoration: none;
}
.nav-link{
    padding-left: .7rem;
    padding-right: .7rem;
}
.nav-toggler{
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
.main-header{
    margin: 0px;
    padding: 0px;
    position: relative;
    top: 0px;
    width: 100%;
    background-color: #fff;
    z-index: 1000;
    display: flex;
    /* transition: opacity .3s, background-color .3s; */
}
.main-header-nav{
    margin: 0 auto;
    width: 1200px;
    max-width: 90%;
    display: flex;
}
.nav-logo{
    display: inline-block;
    padding-top: .3rem;
    padding-bottom: .3rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;
    height: 3rem;
}


/* szkielet dla różnych wyświetlaczy */
@media (min-width: 640px){

}
 
@media (min-width: 768px){
    .nav-toggler{
        display: none;
    }
}
 
@media (min-width: 1024px){
 .nav-menu{
    display: flex;
    flex-direction: row;
}
}
 
@media (min-width: 1200px){

}

</style>