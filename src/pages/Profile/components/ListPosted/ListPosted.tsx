import avatar from 'src/assets/AuthImg/technology-computer-creative-design.jpg';
const ListPosted = () => {
    return (
        <div className="min-h-[200px]">
            <div className="grid grid-cols-3 gap-1">
                <div
                    style={{ backgroundImage: `url(${avatar})` }}
                    className={`col-span-1 pt-[100%] bg-no-repeat bg-cover bg-center`}
                >
                    {/* <img src={avatar} alt="img" className="block w-full h-full" /> */}
                </div>
                {/* <div className="col-span-1 h-[309px]">
                    <img src={avatar} alt="img" className="block w-full h-full" />
                </div>
                <div className="col-span-1 h-[309px]">
                    <img src={avatar} alt="img" className="block w-full h-full" />
                </div> */}
            </div>
        </div>
    );
};

export default ListPosted;
