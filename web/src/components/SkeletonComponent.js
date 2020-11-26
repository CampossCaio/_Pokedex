import Skeleton, { SkeletonTheme }  from 'react-loading-skeleton';

import '../styles/components/SkeletonComponent.css';

export default function SkeletonComponent() {
  const skeletonCards = [ 1 ,2 ,3, 4, 5, 6 ];
  
  return (
    <SkeletonTheme color="#202020" highlightColor="#444">
    <div className="skeleton-cards-container">
        {
          skeletonCards.map((value) => {
            return (
              <div key={value} className="skeleton-container">
              <div className="skeleton-info-top">
              <Skeleton width={50} />
                <button  
                  className="btn-delete"
                >
                  <Skeleton width={30}/>
                </button>
              </div>
      
              <div className="skeleton-info-pokemon">
                <Skeleton height={180} width={180} circle/>
              <span> <Skeleton width={160} /></span>
              </div>
      
              <div className="skeleton-info-attributes">
                <span className="attack"><Skeleton width={80} /></span>
                <span className="defense"><Skeleton width={80} /></span>
              </div>
            </div>
            )
          })
        }
    </div>
  </SkeletonTheme>
  )
}