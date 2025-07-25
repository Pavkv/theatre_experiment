export default function MediaModal({setModalImage, modalImage}) {
    return (
        <div className="media__modal" onClick={() => setModalImage(null)}>
            <div className="media__modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="media__modal-close" onClick={() => setModalImage(null)}>×</button>
                <img src={modalImage.url} alt={modalImage.caption} className="media__modal-image" />
                <p className="media__modal-caption">{modalImage.caption}</p>
            </div>
        </div>
    );
}