import Avatar from 'src/components/Avatar';
import avatar from 'src/assets/AuthImg/technology-computer-creative-design.jpg';
import Button from 'src/components/Button';
import IconSetting from 'src/assets/IconSetting';
import IconPlus from 'src/assets/IconPlus';
import * as Tabs from '@radix-ui/react-tabs';
import IconPost from 'src/assets/IconPost';
import IconReels from 'src/assets/IconReels';
import IconSaved from 'src/assets/IconSaved';
import IconTag from 'src/assets/IconTag';
import ListPosted from './components/ListPosted';
import Footer from 'src/components/Footer';
import AvatarProfile from './components/AvatarProfile';
const Profile = () => {
    return (
        <div className="pt-[30px] max-w-full md:max-w-[935px] mx-auto">
            <div className="mb-[30px] md:mb-[44px]">
                <div className="grid grid-cols-3">
                    <div className="col-span-1 mr-[30px]">
                        {/* <button className="block w-[77px] md:w-[150px] h-[77px] md:h-[150px] mx-auto">
                            <Avatar src={avatar} />
                        </button> */}
                        <AvatarProfile />
                    </div>
                    <div className="col-span-2">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-start mb-5">
                            <div className="text-[20px]">t.tien_01</div>
                            <div className="flex mt-2 md:mt-0 md:ml-5 items-center justify-start">
                                <Button isBtnType2>Edit profile</Button>
                                <Button isBtnType2 extendsClassName="ml-2">
                                    View archive
                                </Button>
                            </div>
                            <button className="hidden md:block ml-[5px] p-2">
                                <IconSetting width={24} height={24} />
                            </button>
                        </div>
                        <div className="hidden md:flex mb-5">
                            <div className="text-[16px] mr-10">
                                <span className="font-semibold">3</span> posts
                            </div>
                            <button className="text-[16px] mr-10">
                                <span className="font-semibold">10</span> followers
                            </button>
                            <button className="text-[16px]">
                                <span className="font-semibold">14</span> following
                            </button>
                        </div>
                        <div className="font-semibold">Nguyễn Thế Tiến</div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 mb-[30px] md:mb-[44px]">
                <div className="col-span-1 mr-[30px]">
                    <div className="rounded-[50%] w-[64px] h-[64px] md:w-[87px] md:h-[87px] bg-white p-1 border border-separate mx-auto">
                        <div className="h-full flex items-center justify-center rounded-[50%] bg-[#FAFAFA]">
                            <IconPlus />
                        </div>
                    </div>
                    <div className="text-center mt-3 font-semibold text-[12px]">New</div>
                </div>
            </div>
            <div className="flex md:hidden items-center justify-around py-3 border-t border-t-separator">
                <div className="text-[16px] mr-10 text-secondary-text">
                    <span className="font-semibold block md:inline text-black text-center">3</span> posts
                </div>
                <button className="text-[16px] mr-10 text-secondary-text">
                    <span className="font-semibold block md:inline text-black text-center">10</span> followers
                </button>
                <button className="text-[16px] text-secondary-text">
                    <span className="font-semibold block md:inline text-black text-center">14</span> following
                </button>
            </div>
            <div className="min-h-[100px] border-t border-t-separator">
                <Tabs.Root defaultValue="tab1">
                    <Tabs.List className="flex items-center justify-center">
                        <Tabs.Trigger
                            value="tab1"
                            className="group h-[52px] w-full md:w-auto md:mr-[60px] text-secondary-text data-[state=active]:text-black data-[state=active]:border-t data-[state=active]:border-t-black"
                        >
                            <div className="flex items-center justify-center">
                                <div className="group-data-[state=active]:text-primary-button md:hidden">
                                    <IconPost width={24} height={24} />
                                </div>
                                <div className="hidden md:block">
                                    <IconPost />
                                </div>
                                <div className="hidden md:block text-[12px] font-semibold ml-[6px]">POSTS</div>
                            </div>
                        </Tabs.Trigger>
                        <Tabs.Trigger
                            value="tab2"
                            className="group h-[52px] w-full md:w-auto md:mr-[60px] text-secondary-text data-[state=active]:text-black data-[state=active]:border-t data-[state=active]:border-t-black"
                        >
                            <div className="flex items-center justify-center">
                                <div className="group-data-[state=active]:text-primary-button md:hidden">
                                    <IconReels width={24} height={24} />
                                </div>
                                <div className="hidden md:block">
                                    <IconReels />
                                </div>
                                <div className="hidden md:block text-[12px] font-semibold ml-[6px] ">REELS</div>
                            </div>
                        </Tabs.Trigger>
                        <Tabs.Trigger
                            value="tab3"
                            className="group h-[52px] w-full md:w-auto md:mr-[60px] text-secondary-text data-[state=active]:text-black data-[state=active]:border-t data-[state=active]:border-t-black"
                        >
                            <div className="flex items-center justify-center">
                                <div className="group-data-[state=active]:text-primary-button md:hidden">
                                    <IconSaved width={24} height={24} />
                                </div>
                                <div className="hidden md:block">
                                    <IconSaved width={12} height={12} />
                                </div>
                                <div className="hidden md:block text-[12px] font-semibold ml-[6px] ">SAVED</div>
                            </div>
                        </Tabs.Trigger>
                        <Tabs.Trigger
                            value="tab4"
                            className="group h-[52px] w-full md:w-auto md:mr-[60px] text-secondary-text data-[state=active]:text-black data-[state=active]:border-t data-[state=active]:border-t-black"
                        >
                            <div className="flex items-center justify-center ">
                                <div className="group-data-[state=active]:text-primary-button md:hidden">
                                    <IconTag width={24} height={24} />
                                </div>
                                <div className="hidden md:block">
                                    <IconTag width={12} height={12} />
                                </div>
                                <div className="hidden md:block text-[12px] font-semibold ml-[6px]">TAGGED</div>
                            </div>
                        </Tabs.Trigger>
                    </Tabs.List>
                    <Tabs.Content value="tab1">
                        <ListPosted />
                    </Tabs.Content>
                    <Tabs.Content value="tab2">REELS</Tabs.Content>
                    <Tabs.Content value="tab3">SAVED</Tabs.Content>
                    <Tabs.Content value="tab4">TAGGED</Tabs.Content>
                </Tabs.Root>
            </div>
            <div className="mt-4">
                <Footer />
            </div>
        </div>
    );
};

export default Profile;
