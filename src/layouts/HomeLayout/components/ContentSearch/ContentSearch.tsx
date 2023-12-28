import InputSearch from 'src/components/InputSearch';
import SearchRecent from 'src/components/SearchRecent';
const ContentSearch = () => {
    return (
        <div className="h-full">
            <div>
                <h2 className="px-6 pt-3 pb-6 my-2 text-[24px] font-semibold">Search</h2>
                <div>
                    <InputSearch />
                </div>
            </div>
            <SearchRecent />
        </div>
    );
};

export default ContentSearch;
