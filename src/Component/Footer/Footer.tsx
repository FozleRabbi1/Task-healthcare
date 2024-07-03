const Footer = () => {
  return (
    <div className="max-w-[1160px] mx-auto px-5 py-20">
      <img
        className="mb-5"
        src="https://i.ibb.co/88TTcgk/logo-light.png"
        alt=""
      />
      <footer className="footer text-[#CCCCD1] flex justify-between ">
        <aside>
          <p className="mb-2 font-inter text-[16px] font-normal leading-[24px] text-left ">
            123 Main Street Anytown, <br /> USA Postal Code: 12345
          </p>

          <p className="font-inter text-[16px] font-normal leading-[24px] text-left ">
            Support: support@oyolloo.com <br /> (Available : 10:00am to 07:00pm)
          </p>
        </aside>
        <nav>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Success Page</a>
          <a className="link link-hover">Terms and condition</a>
        </nav>
        <nav>
          <a className="link link-hover">Services</a>
          <a className="link link-hover">Scheduling</a>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">Patient Portal</a>
        </nav>
        <nav className="text-right">
          <a className="link link-hover">Follow Us</a>

          <a className="link link-hover">
            {" "}
            <img src="https://i.ibb.co/prFZcjM/Group-9168.png" alt="" />{" "}
          </a>

          <a className="link link-hover"></a>
          <a className="link link-hover"></a>
          <a className="link link-hover"></a>
          <a className="link link-hover">@docplus 2024</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
