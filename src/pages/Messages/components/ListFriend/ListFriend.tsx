import LinkToMember from 'src/components/LinkToMember';
import avatar from 'src/assets/AuthImg/technology-computer-creative-design.jpg';

const ListFriendMock = [
    {
        avatar: avatar,
        name: 'lilaschan01',
    },
];

const ListFriend = () => {
    return (
        <div className="flex-1 overflow-y-auto">
            {true ? (
                Array(15)
                    .fill(0)
                    .map((_, index) => (
                        <div key={index}>
                            <LinkToMember isMess isActive={index === 0} to={'/messages/123'} />
                        </div>
                    ))
            ) : (
                <div className="w-full h-full flex items-center justify-center">không tìm thấy tài khoản</div>
            )}
        </div>
    );
};

export default ListFriend;
