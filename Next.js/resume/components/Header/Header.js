import Link from "next/link";
import Head from "next/head";
import HeadLink from "../headLink"

export default function MyComponent() {
  return <div>
    <Head>
    <HeadLink/>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"/>
    </Head>
    <nav className="navbar navbar-expand-sm navbar" data-toggle="affix">
    <div className="mx-auto d-sm-flex d-block flex-sm-nowrap">
    <div className="collapse navbar-collapse text-center" id="navbarsExample11">
      <ul className="navbar-nav" style={{ fontFamily: 'Balsamiq Sans'}}>
        <li className="nav-item active">
          <Link href="/">
          <a className="nav-link" href="#" style={{color:'#383838'}}>Home</a>
          </Link>
        </li>

        <li className="nav-item">
        <Link href="/History">
          <a className="nav-link" href="#" style={{color:'#383838'}}>Resume</a>
          </Link>
        </li>

        <li className="nav-item">
        <Link href="/Skill">
          <a className="nav-link" href="#" style={{color:'#383838'}}>Skill</a>
        </Link>
        </li>

        <li className="nav-item">
        <Link href="/Contact">
          <a className="nav-link" href="#" style={{color:'#383838'}}>Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  </div>
}
