import routeConstants from "../constants/routeConstants";
import { Link } from "react-router-dom";
import { Icons } from "../assets//icons";
import { IoMdClose } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import { useState, useContext, useRef } from "react";
import { DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { DialogContext } from "@/context/DialogContext";


const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const {setDialogType, setIsOpen} = useContext(DialogContext);
  const [email, setEmail] = useState('');
  const emailRef = useRef();

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  const handleLogin = () => {
    setDialogType("login");
    setIsOpen("true");
  }

  const onscroll = (event) => {
    setTimeout(() => {
      window.history.pushState({}, undefined, "/");
    }, 1000);
  };

  document.addEventListener("scroll", onscroll);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleRequest = (e) => {
    e.preventDefault();
    
    fetch("https://niaoti.com/api/v1/request-access", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    }).catch((err) => {
      setEmail("");
    }).then((res) => {
      setEmail("");
    });
  }

  return (
    // <header className="text-white flex flex-col relative after:content-[''] after:bg-grad-theme-135 after:absolute xl:after:w-[520px] 
    //     xl:after:h-[520px] md:after:w-[300px] md:after:h-[300px] after:w-[200px] after:h-[200px] after:top-[90%] after:left-0 
    //     after:blur-[70px] after:rounded-full before:content-[''] before:bg-grad-theme-135 before:absolute xl:before:w-[520px] 
    //     xl:before:h-[520px] md:before:w-[300px] md:before:h-[300px] before:w-[200px] before:h-[200px] before:top-[60%] 
    //     before:right-0 before:blur-[70px] before:rounded-full">
    <header className="text-white flex flex-col">
      <div className="text-black bg-white px-4 flex items-center justify-between py-[10px] mx-auto w-full relative">
        <div className="flex items-center gap-x-5">
          <Link to={routeConstants.ROOT} className="max-w-[120px] lg:max-w-[160px] md:max-w-[140px]">
            <img src={Icons.logo} alt="site logo" />
          </Link>
          <nav 
            className={`bg-white lg:relative lg:right-auto lg:top-auto lg:bg-transparent lg:p-0 fixed right-0 top-0 
            h-full z-50 p-5 sm:w-[300px] w-full translate-alls ease-in-out duration-300 shadow-navbar 
             lg:shadow-none lg:translate-x-0 ${isNavbarOpen ? "translate-x-0" : "translate-x-full"} mt-7`} >

            <div className="flex justify-end mb-10 lg:hidden hover:opacity-80 transition-all duration-300 ease-in-out">
              <button type="button" onClick={toggleNavbar}>
                <IoMdClose size={32} />
              </button>
            </div>
            <ul className="flex lg:flex-row lg:items-center xl:gap-x-12 gap-x-4 flex-col gap-y-4 text-center">
              {
                Object.entries(routeConstants).map(([path, name], index) => {
                  if(index < 2 || path == "PAGE_NOT_FOUND") return "";  
                  // console.log(path, name);
                  return (
                      <li key={'nav' + index}>
                        <Link to={name} className="text-black text-base font-source-sans 
                                        hover:opacity-50 transition-all ease-in-out duration-200 font-normal whitespace-nowrap">
                          {path}
                        </Link>
                      </li>
                    )
                })
              }
            </ul>
            <div className="flex flex-col gap-y-5 items-center lg:hidden mt-6">

              <Link to="" className="text-base font-semibold text-black hover:text-risd-blue transition-all duration-300 ease-in-out">
                Already member ?
              </Link>
              
              {/* <DialogTrigger asChild> */}
                <Button variant="outline">Log in</Button>

                {/* <Link to="" className="capitalize text-base font-semibold text-white     
                              transition-all duration-300 ease-in-out px-[30px] min-h-[44px] 
                              border-[1px] border-black border-solid rounded-lg inline-flex items-center justify-center texte-center 
                              hover:bg-grad-theme-135 whitespace-nowrap w-full">
                  Log in
                </Link> */}
              {/* </DialogTrigger> */}
            </div>
          </nav>
        </div>

        <div className="lg:flex items-center xl:gap-x-7 lg:gap-x-6 gap-x-5 hidden pt-7">
          <Link
            to=""
            className="text-base font-semibold text-black hover:text-risd-blue transition-all duration-300 ease-in-out whitespace-nowrap"
          >
            Already a member ?
          </Link>
          {/* <DialogTrigger asChild> */}
            <Button variant="outline" onClick={handleLogin}>Log in</Button>
          {/* <Link
            to=""
            className="capitalize text-base font-semibold text-black transition-all duration-300 ease-in-out px-[30px] min-h-[44px] border-[1px] border-white border-solid rounded-lg inline-flex items-center justify-center text-center hover:bg-grad-theme-135 whitespace-nowrap w-full"
          >
            log in
          </Link> */}
          {/* </DialogTrigger> */}
        </div>
        <button 
          type="button" 
          className="lg:hidden hover:opacity-80 duration-300 ease-in-out translate-all"
          onClick={toggleNavbar}
        >
          <MdMenu size={32} />
        </button>
      </div>

      <div className="flex flex-col items-center justify-center max-w-[1020px] mx-auto text-center font-montserrat flex-1 relative z-10 mt-[100px] px-4">
        <h1 className="text-white font-bold xl:text-[64px] lg:text-5xl text-4xl leading-[1.25]"><span className="gradi-theme-text">WEB </span>- Mobile development</h1>
        <div className="lg:text-xl md:text-lg text-base my-[46px] text-center">  
          <h2>- WEB applications -</h2>
          <h2>- Mobile applications [Android/iOS] -</h2>
          <h2>- Showcase website -</h2>
          <h2>- E-commerce -</h2>
        </div>
      </div>

      <form className="w-full">
        <div className="flex flex-col md:flex-row items-stretch gap-[14px]
         md:max-w-[610px] mx-auto">
          <input
            value={email}
            onChange={handleEmail}
            type="email"
            placeholder="Enter your email"
            className="lg:min-h-[56px] min-h-[51px] px-4 rounded-lg bg-transparent border-[1px] border-white w-full
             placeholder:text-cadet-gray outline-0 font-source-sans lg:text-base text-sm"
          />
          <button type="submit"  onClick={handleRequest} className="bg-risd-blue rounded-lg lg:min-h-[56px] min-h-[50px]
          text-nowrap text-base px-5 font-semibold hover:scale-105 transition-all ease-in-out duration-300">Request Access</button>
        </div>
      </form>

      <hr className="w-60 h-1 mx-auto mt-14 bg-gray-100 border-0 rounded md:mt-14 dark:bg-gray-700" />
      
    </header>
    

  );
}

export default Header;