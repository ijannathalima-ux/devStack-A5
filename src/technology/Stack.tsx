

const Stack = () => {
    return (
        <div className="border border-[#94A3B8] py-3 px-5 flex items-center rounded-2xl">
            <div>
                <h2 className="text-[20px] font-semibold mb-3">Your Stack</h2>
                <p>No technologies selected yet.</p>

                <div className="bg-white p-9">
                    <button className="btn btn-neutral btn-dash py-9 px-5 rounded-2xl">Your stack is empty.</button>
                </div>
            </div>
        </div>
    );
};

export default Stack;