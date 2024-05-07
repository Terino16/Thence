interface HeadingProps {
    title: string;
    message: string;
}

const Heading = ({ title, message }: HeadingProps) => {
    const breakMessage = (message: string) => {
        const words = message.split(' ');
        const dividedMessage = [];
        for (let i = 0; i < words.length; i += 3) {
            dividedMessage.push(words.slice(i, i + 3).join(' '));
        }
        return dividedMessage.join('\n');
    };

    return (
        <div className="flex items-center flex-col">
            <p className="font-Covered text-green-500 text-4xl">{title}</p>

            <p className="font-Manrope text-black text-6xl whitespace-pre-line text-center font-semibold ">{breakMessage(message)}</p>
        </div>
    );
};

export default Heading;
