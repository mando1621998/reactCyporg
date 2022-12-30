import './GamingLibrary.css'
import {GamingLibraryCard, SectionHeader, SectionWrapper } from '../../Components/index';
import GamingLibraryData from '../../Data/GamingLibraryData';

const GamingLibrary = () => {

    const cards = GamingLibraryData.map(card =>{
        return <GamingLibraryCard id={card.id} image={card.image} title={card.title} category={card.category} rate={card.rate} download={card.download} />
    })

  return (
    <>
      <SectionWrapper>
        <SectionHeader>Gaming Library</SectionHeader>
            <div className='gaming-library-cards'>
                {cards}
            </div>
      </SectionWrapper>
    </>
  )
}

export default GamingLibrary
