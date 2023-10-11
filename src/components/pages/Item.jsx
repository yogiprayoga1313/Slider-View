import React from 'react'
import { BiDownArrow, BiLeftArrow, BiRightArrow } from 'react-icons/bi'
import './Item.css'
import { Helmet } from 'react-helmet';

function Item() {
  const [selectedId, setSelectedId] = React.useState(null)
  const [currentPage, setCurrentPage] = React.useState(1);
  const [showBgMovie, setShowBgMovie] = React.useState(false);
  const itemsPerPage = 5;
  const movies = [
    {
      id: 1,
      image: 'https://occ-0-7110-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRtesDNl6Q2JsMQbg-B3QPBwLBKAJ82EqOsy6x8GmQGyL_MHD0lFNECf_zUp1qQuCwcdCOLy0H7LrFzjas9OKYRTstBpNeIMB6BVR93_drg4mEwyKpKzoyd0gizEVnjX-Ti1.jpg?r=c62',
      imageBg: 'https://occ-0-7110-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRtesDNl6Q2JsMQbg-B3QPBwLBKAJ82EqOsy6x8GmQGyL_MHD0lFNECf_zUp1qQuCwcdCOLy0H7LrFzjas9OKYRTstBpNeIMB6BVR93_drg4mEwyKpKzoyd0gizEVnjX-Ti1.jpg?r=c62',
      title: 'Vicenzo',
      descriptions: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
    },
    {
      id: 2,
      image: 'https://occ-0-7110-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfFU2J-v7XCYysMgGbxPRpUMFbZlzASEFmuGj-t3mTCpelWoVqkjsH3g3EJvX_OV9qmpKb0NL1zEh3TQ6aH4jT__yLxWChEw-9VKKXNa0Uy9qVmyAOPXqg2g90RrSJdAtRzN.jpg?r=1a1',
      imageBg: 'https://occ-0-7110-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfFU2J-v7XCYysMgGbxPRpUMFbZlzASEFmuGj-t3mTCpelWoVqkjsH3g3EJvX_OV9qmpKb0NL1zEh3TQ6aH4jT__yLxWChEw-9VKKXNa0Uy9qVmyAOPXqg2g90RrSJdAtRzN.jpg?r=1a1',
      title: 'Alchemy of Souls',
      descriptions: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
    },
    {
      id: 3,
      image: 'https://occ-0-7110-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQ7vuWuNUY9RllB_XiPICA9oYOM7OkUd-Ef1dCNcqH0CcPRQJVYTibUJbtblg0cD5sBnQlfeJT1ojBsNF9p526kJ99t5Z4N9IM0.webp?r=0d1',
      imageBg: 'https://occ-0-7110-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQ7vuWuNUY9RllB_XiPICA9oYOM7OkUd-Ef1dCNcqH0CcPRQJVYTibUJbtblg0cD5sBnQlfeJT1ojBsNF9p526kJ99t5Z4N9IM0.webp?r=0d1',
      title: '365 Days',
      descriptions: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
    },
    {
      id: 4,
      image: 'https://occ-0-7110-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABU3KP5zzZzWu3d2PUu8RWAl-o9iEUcgqnrHPnTpGkIR5-zauwBAL7B_b7FzleIlt-EAGJNsDj1xC4uj00739SWRsF05v_JBND996X3Up6qRvlpoFeso3T5FOcx0DBYTcv3-q.jpg?r=059',
      imageBg: 'https://occ-0-7110-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABU3KP5zzZzWu3d2PUu8RWAl-o9iEUcgqnrHPnTpGkIR5-zauwBAL7B_b7FzleIlt-EAGJNsDj1xC4uj00739SWRsF05v_JBND996X3Up6qRvlpoFeso3T5FOcx0DBYTcv3-q.jpg?r=059',
      title: 'My Liberation Notes',
      descriptions: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
    },
    {
      id: 5,
      image: 'https://occ-0-7110-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABW7TlKYrNld-LZUzFh3s00WhZWzIfN2ZqLmA2nRbnXp9a2o0T5ebFe8EyGgIGZS3Gdak747rmN0t2HtaodEMaW0mys-iyWGjnyNJ0bp2_kICilLvq-hfZIoMKIJ8cHzPTwHUj2BJmIfUanys7zzY85s3b96ZMbQkb2CZJXDQxYFvP3Bnr9wTIN-vqRkdGisrrKp4hZaFJmSDvjAtKECAZswCL45mQEaDum63gsDd1oG5pKNl6K8EhOp3gPVncfJpuV1D78NxzKSeRBiUeMYK21LOEuUVzJ0d1wC4AS_BL4k9xzcgugo7jbsqnqzrUQ5yRsDD_r6cbwHPHBbp9Oafn5r8PGDnUOWfOIsZkwAiDM64UNAXZ-FZeQ.jpg?r=f75',
      imageBg: 'https://occ-0-7110-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABW7TlKYrNld-LZUzFh3s00WhZWzIfN2ZqLmA2nRbnXp9a2o0T5ebFe8EyGgIGZS3Gdak747rmN0t2HtaodEMaW0mys-iyWGjnyNJ0bp2_kICilLvq-hfZIoMKIJ8cHzPTwHUj2BJmIfUanys7zzY85s3b96ZMbQkb2CZJXDQxYFvP3Bnr9wTIN-vqRkdGisrrKp4hZaFJmSDvjAtKECAZswCL45mQEaDum63gsDd1oG5pKNl6K8EhOp3gPVncfJpuV1D78NxzKSeRBiUeMYK21LOEuUVzJ0d1wC4AS_BL4k9xzcgugo7jbsqnqzrUQ5yRsDD_r6cbwHPHBbp9Oafn5r8PGDnUOWfOIsZkwAiDM64UNAXZ-FZeQ.jpg?r=f75',
      title: 'Ice Cold',
      descriptions: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
    },
    {
      id: 6,
      image: 'https://occ-0-7110-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTev2bmJ7HzFwvy2cJyCPdhdalMe-Av2fyf_51x6iPQTqq3U4qD0fU7o373C8xh2BHVsooPcNK5wBJb9ovGD3ycYe9nmLOfVhHo.webp?r=e2f',
      imageBg: 'https://occ-0-7110-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTev2bmJ7HzFwvy2cJyCPdhdalMe-Av2fyf_51x6iPQTqq3U4qD0fU7o373C8xh2BHVsooPcNK5wBJb9ovGD3ycYe9nmLOfVhHo.webp?r=e2f',
      title: 'Dilan 1991',
      descriptions: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
    },
    {
      id: 7,
      image: 'https://occ-0-7110-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABb26Sz_ARV6G1OdUhrqZgPtBXWCrHGwZMLZrfyQTqVpAf5UpF98_v9TfCG5QlS9oCSRbHvNOEfE42sV3ADfQc7RSoQeh_Npks3UwFDYuBxKIVCCA4oHDiNj_M4Thi8Qk0uZg.jpg?r=ad9',
      imageBg: 'https://occ-0-7110-64.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABb26Sz_ARV6G1OdUhrqZgPtBXWCrHGwZMLZrfyQTqVpAf5UpF98_v9TfCG5QlS9oCSRbHvNOEfE42sV3ADfQc7RSoQeh_Npks3UwFDYuBxKIVCCA4oHDiNj_M4Thi8Qk0uZg.jpg?r=ad9',
      title: 'Start-Up',
      descriptions: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'
    }
  ];

  const handleImageClick = (id) => {
    if (selectedId === id) {
      setSelectedId(null)
      setShowBgMovie(false)
    } else {
      setSelectedId(id)
      setShowBgMovie(true)
    }
  }


  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const itemsToShow = movies.slice(startIndex, endIndex);
  return (
    <>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>View</title>
        </Helmet>
      </div>
      <div className='flex flex-col gap-2'>
        <div className="flex gap-2">
          <button className='arrow-icon'
            onClick={handlePrevPage}
            disabled={endIndex <= movies.length} >
            <BiLeftArrow size={30} color='white'
            />
          </button>
          <div className='flex gap-1'
          >
            {itemsToShow.map(movie => (
              <>
                <div className='flex flex-col relative'>
                  <div key={movie.id}>
                    <div>
                      <div className='relative custom-hover'
                      >
                        <img
                          src={movie?.image}
                          alt="movie"
                          className={`w-[325px] h-18 ${selectedId === movie.id ? 'cursor-pointer' : ''}`}
                        />
                        <div
                          onClick={() => handleImageClick(movie.id)}
                          className='text-white opacity-50 transition-opacity text-center absolute bottom-0 w-full h-10 bg-black cursor-pointer flex justify-center items-center arrow-down' >
                          <label
                          >
                            <BiDownArrow size={30} className='cursor-pointer' />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
          <button className='arrow-icon'
            onClick={handleNextPage}
            disabled={endIndex >= movies.length}  >
            <BiRightArrow size={30} color='white' />
          </button>
        </div>
        {movies.map(bgMovie => (
          <>
            <div key={bgMovie.id} className='px-3'>
              {selectedId === bgMovie.id && showBgMovie && (
                <div className='text-white flex gap-5'>
                  <div className='flex flex-col gap-4'>
                    <span className='text-3xl w-[300px]'>{bgMovie?.title}</span>
                    <span className='opacity-70  w-[620px]'>{bgMovie?.descriptions}</span>
                  </div>
                  <img
                    src={bgMovie?.imageBg}
                    alt="bgMovie"
                    className='bg-cover w-full h-[500px] rounded-md' />
                </div>
              )}
            </div>
          </>
        ))}
      </div>
    </>
  )
}

export default Item