import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { modalSelector } from 'store/slices/modalSlice';
import YouTube from 'react-youtube';
import { setClose } from 'store/slices/modalSlice';
import Modal from 'react-modal';
import Spinner from 'components/elements/Spinner';
import Link from 'next/link';

export default function VideoModal() {
    const modalOpen = useSelector((state) => state.modal.modalOpen);
    const { type, title, description, videoId, date } = useSelector((state) => state.modal.modalProps);
    const dispatch = useDispatch();

    const opts = {
        // minHeight: '400',
        width: '100%',
        // height: '380',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
            modestbranding: 1
        }
    };

    const customStyles = {
        content: {
            zIndex: 100,
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: 'auto',
            backgroundColor: 'transparent',
            display: 'flex',
            justifyContent: 'center',
            border: 0
        },
        overlay: {
            backgroundColor: 'rgba(0,0,0,0.7)'
        }
    };

    return (
        <Modal isOpen={modalOpen} style={customStyles}>
            <section
                aria-label="dialog"
                className="relative w-[100%] lg:w-[61%] lg:max-w-[1024px] lg:h-auto rounded p-3 grid grid-cols-1 lg:grid-cols-[minmax(300px,_1fr)_300px] bg-gradient-to-r from-black  to-white "
            >
                <div>
                    {videoId ? (
                        <YouTube iframeClassName="h-[250px] lg:h-[400px]" opts={opts} videoId={videoId} />
                    ) : (
                        <Spinner />
                    )}
                </div>

                <section className="relative h-full flex flex-col justify-between items-center p-5">
                    <div className="flex flex-col items-center">
                        <p className="mb-2 font-bold">TITLE</p>
                        <p className="mb-3 text-xs md:text-base font-normal">{title}</p>
                        <p className="mb-2 font-bold">DATE</p>
                        <p className="mb-3 text-xs md:text-base font-normal">{date?.slice(0, 10)}</p>
                    </div>
                    <Link href="/contact">
                        <a
                            className="btn-primary py-4 px-8 animate__animated animate__fadeIn hover-up-2 cursor-pointer bg-black"
                            onClick={() => dispatch(setClose())}
                        >
                            문의하기
                        </a>
                    </Link>
                </section>
                <button
                    className="absolute right-3 bottom-3 rounded-none bg-black text-white text-xs py-2 px-4 animate__animated animate__fadeIn hover-up-2 cursor-pointer"
                    onClick={() => dispatch(setClose())}
                >
                    닫기
                </button>
            </section>
        </Modal>
    );
}
