import ContentHomePage from './components/ContentHomePage';
import HeaderHomePage from './components/HeaderHomePage';
import Story from './components/Story';
import Suggestion from './components/Suggestion';

const HomePage = () => {
    return (
        <div>
            <HeaderHomePage />
            <div className="mt-[60px] md:mt-0">
                <div className="flex items-start justify-center">
                    <div className="max-w-[630px] w-full mt-4">
                        <Story />
                        <div className="w-full flex items-center justify-center">
                            <ContentHomePage />
                        </div>
                    </div>
                    <div className="hidden xl:block w-[383px] pl-[64px] h-[100vh] mt-8">
                        <Suggestion />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
