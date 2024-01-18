import LinkToMember from 'src/components/LinkToMember';

const Suggestion = () => {
    return (
        <div className="">
            <div>
                <LinkToMember isSwitch />
            </div>
            <div className="mt-6 mb-2">
                <div className="px-4 flex items-center justify-between">
                    <div className="text-secondary-text font-semibold">Suggested for you</div>
                    <button className="text-[12px] text-black font-semibold">See All</button>
                </div>
                <div className="py-2">
                    <LinkToMember isBtnFollowText />
                    <LinkToMember isBtnFollowText />
                    <LinkToMember isBtnFollowText />
                    <LinkToMember isBtnFollowText />
                    <LinkToMember isBtnFollowText />
                </div>
                <div className="px-4 mt-[20px] text-[12px] text-tertiary-text">
                    About Help Press API Jobs Privacy Terms Locations Language Meta Verified
                </div>

                <div className="px-4 mt-[20px] text-[12px] text-tertiary-text">© 2024 INSTAGRAM FROM META</div>
            </div>
        </div>
    );
};

export default Suggestion;
