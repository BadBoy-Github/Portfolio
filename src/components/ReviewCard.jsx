
import PropTypes from "prop-types"

const ratings = new Array(5)
ratings.fill({
    icon: 'star',
    style: { fontVariationSettings: '"FILL" 1' }
})


const ReviewCard = ({
    content,
    imgSrc,
    name,
    company
}) => {
    return (
      <div className="bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px] ">
        <div className="flex items-center gap-1 mb-3">
          {ratings.map(({ icon, style }, key) => (
            <span
              key={key}
              className="material-symbols-rounded text-yellow-400 hover:text-yellow-300 text-[18px] hover:animate-[bounce_1s_ease-in-out_infinite] cursor-pointer"
              style={style}
            >
              {icon}
            </span>
          ))}
        </div>

        <p className="text-zinc-400 mb-8">{content}</p>

        <div className="flex items-center gap-2 mt-auto">
          <figure className="img-box rounded-lg">
            <img
              src={imgSrc}
              width={44}
              height={44}
              alt={name}
              loading="lazy"
              className="img-cover rounded-xl"
            />
          </figure>

          <div>
            <p>{name}</p>

            <p className="text-xs text-zinc-400 tracking-wider">{company}</p>
          </div>
        </div>
      </div>
    );
}

ReviewCard.propTypes = {
    content: PropTypes.string,
    imgSrc: PropTypes.string,
    name: PropTypes.string,
    company: PropTypes.string
}

export default ReviewCard