import html2canvas from 'html2canvas';

export const createURI = () => {
    return html2canvas(document.getElementById('banner'), { allowTaint: true, useCORS: true }).then(
        canvas => {
            const bannerURI = canvas.toDataURL('image/png');
            return bannerURI;
        }
    );
};
