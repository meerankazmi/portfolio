export default function Card({ imageUrl, title, technologies, url }) {
  return (
    <div
      className="max-w-xs rounded overflow-hidden shadow-sm bg-dark-300 mx-16 hover:shadow-2xl transition-all ease-in-out duration-300 hover:text-primary-light"
      style={{ height: "300px" }}
    >
      <a href={url} target="_blank">
        <img className="w-full" src={imageUrl} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <div className="px-2 py-2">
            {technologies.map((el) => {
              return (
                <span className="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">
                  {el}
                </span>
              );
            })}
          </div>
        </div>
      </a>
    </div>
  );
}
