function Footer() {

  return (

    <footer className="
      bg-gray-900
      text-white
      py-5
      px-4
      sm:px-6
      mt-auto
    ">


      <div className="
        max-w-screen-xl
        mx-auto
        flex
        flex-col
        md:flex-row
        justify-between
        items-center
        gap-4
        text-center
        md:text-left
      ">


        {/* Company Name */}

        <div>

          <h3 className="
            text-lg
            sm:text-xl
            font-bold
          ">
            Employee Management System
          </h3>


          <p className="
            text-gray-400
            text-xs
            sm:text-sm
            mt-1
          ">
            Manage employees, attendance and departments easily.
          </p>


        </div>





        {/* Copyright */}

        <div className="
          text-gray-400
          text-xs
          sm:text-sm
        ">

          © {new Date().getFullYear()} EMS. All Rights Reserved.

        </div>





        {/* Links */}

        <div className="
          flex
          gap-3
          sm:gap-5
          text-xs
          sm:text-sm
        ">


          <a
            href="#"
            className="
              text-gray-400
              hover:text-white
              transition
            "
          >
            Privacy
          </a>


          <a
            href="#"
            className="
              text-gray-400
              hover:text-white
              transition
            "
          >
            Terms
          </a>


          <a
            href="#"
            className="
              text-gray-400
              hover:text-white
              transition
            "
          >
            Support
          </a>


        </div>


      </div>


    </footer>

  );

}


export default Footer;