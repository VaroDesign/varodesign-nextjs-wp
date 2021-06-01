import { getPhotos } from '../lib/api';
import Navbar from '../components/Navbar';

const Images = ({ allImages: { edges } }) => (
    <div className="photography">
        <div className="container">
        <Navbar/>
          {edges.map(({ node }) => (
            <div key={node.id}>
              <div>
                <figure>
                  <img
                    height={150}
                    src={node.mediaItemUrl}
                    alt={node.altText}
                  />
                </figure>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
  
export default Images

export async function getServerSideProps() {
    const allImages = await getPhotos();
    return {
      props: {
        allImages
      }
    };
  }
