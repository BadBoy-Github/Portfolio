
import PropTypes from "prop-types"


const CertificationsCard = ({
  imgSrc,
  title,
  company,
  logo,
  certNumber,
}) => {
  const openImage = () => {
     window.open(imgSrc, "_blank");
  };

  return (
    <div
      className="bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px] cursor-pointer group"
      onClick={openImage}
    >
      <div className="flex items-center justify-between gap-2 mt-auto">
        <div>
          <p className="flex items-center gap-2">
            {title}
            <span className="text-xs text-zinc-400">#{certNumber}</span>
          </p>
          <p className="text-xs text-zinc-400 tracking-wider">{company}</p>
        </div>
        <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-zinc-700">
          <img src={logo} alt="Logo" className="w-6 h-6 object-cover p-0.5" />
        </div>
      </div>
      <figure className="rounded-lg bg-zinc-700 mt-4 group-hover:scale-105 transition-transform duration-300">
        <img
          src={imgSrc}
          width={44}
          height={44}
          alt={title}
          loading="lazy"
          className="w-full h-60 object-cover bg-zinc-400/20 rounded-lg"
        />
      </figure>
    </div>
  );
};

CertificationsCard.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  company: PropTypes.string,
  logo: PropTypes.string,
  certNumber: PropTypes.number,
};

export default CertificationsCard;