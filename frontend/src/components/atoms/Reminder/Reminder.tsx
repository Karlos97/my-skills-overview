const Reminder = ({ children }: { children: React.ReactNode; }) =>
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6 text-sm text-gray-700">
        <p>
            <strong className="font-semibold text-gray-800">{children}</strong>
        </p>
    </div>

export default Reminder;