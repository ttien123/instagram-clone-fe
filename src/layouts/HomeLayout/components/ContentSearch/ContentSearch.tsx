import InputSearch from 'src/components/InputSearch';
import SearchRecent from 'src/components/SearchRecent';
import useSwitchMode from 'src/reducer/useSwtichMode';
const ContentSearch = () => {
    const darkMode = useSwitchMode((state) => state.darkMode);

    return (
        <div className="h-full">
            <div>
                <h2 className={`px-6 pt-3 pb-6 my-2 text-[24px] font-semibold ${darkMode && 'text-white'}`}>Search</h2>
                <div>
                    <InputSearch />
                </div>
            </div>
            <SearchRecent />
        </div>
    );
};

export default ContentSearch;
