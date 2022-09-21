import './card.css';


const Card = ({article}) => {
  const {urlToImage, author, description, title, content, publishedAt, url} = article;
  return (
  <div className="news__card">
     <div className="news__card-img">
     <img src={urlToImage} alt="" />
    </div>
    <div className="news__card_details">
      <h1>{title.substring(0, 25)+"..."}</h1>
      <p>{content.substring(0, 200)}</p>
      <a href={url}>Read...</a>
      <em>{publishedAt.substring(0, 10)}</em>
    </div>
</div>
  );
}


export default Card;