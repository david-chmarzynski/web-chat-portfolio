export default function Chat({ chat, messages }) {
    return (
        <div className="header-chat">
            <h1>Nouveau Chat avec {chat.users[1]}</h1>
        </div>
    )
}