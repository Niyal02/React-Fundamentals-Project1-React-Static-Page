import classes from './navbar.module.css'

function Navbar() {
  return (
    <div className={classes.navbar}>      
      <img src="https://imgs.search.brave.com/CQbryDwdAyF7tzJAkmgUm2GiqjquFjxuCYJeDI9GRJI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG40/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvbG9nb3MtMy82/MDAvUmVhY3QuanNf/bG9nby01MTIucG5n" alt="" className='nav--logo'/>
      <h3 className={classes.nav__logo_text}>React Facts</h3>
      <h4 className={classes.nav__title}>React course - Project 1</h4>     
    </div>
  )
}

export default Navbar
