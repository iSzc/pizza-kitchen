import SocialLinks from "./SocialLinks/SocialLinks";

function Footer() {
  const socialMediaUrls = {
    Facebook: "https://www.facebook.com",
    Twitter: "https://www.twitter.com",
    Instagram: "https://www.instagram.com",
    Pinterest: "https://www.pinterest.com",
  };

  return (
    <footer className="mt-16 bg-[#fb7413] text-white flex w1024:flex-col justify-between">
      <div className=" flex w1024:w-auto w1024:flex-col w1024:mt-11 mt-10 mb-9 w1024:items-center w1024:gap-y-8 w1024:gap-x-0 gap-x-12 w1024:ml-0 ml-10">
        <div className="w1024:w-full flex flex-col items-center">
          <span className="font-Overpass font-bold text-lg">
            LIGUE PARA NÓS
          </span>
          <span className="mt-2 font-semibold">+34 2322-3232</span>
          <span className="font-semibold">+34 2322-3232</span>
        </div>
        <div className="flex flex-col items-center ">
          <span className="font-Overpass font-bold text-lg">ENDEREÇO</span>
          <span className="mt-2 font-semibold">
            Av. Paulista, Sâo Paulo, SP
          </span>
        </div>
        <div className="flex flex-col items-center ">
          <span className="font-Overpass text-lg font-bold">
            HORÁRIO DE FUNCIONAMENTO
          </span>
          <span className="mt-2 font-semibold">Segunda: Fechado</span>
          <span className="font-semibold">Terça - Domingo: 11am - 22pm</span>
        </div>
      </div>
      <div className="flex justify-center w1024:mr-0 mr-20 mt-4 gap-x-6 mb-6">
        <SocialLinks urls={socialMediaUrls} />
      </div>
    </footer>
  );
}

export default Footer;
