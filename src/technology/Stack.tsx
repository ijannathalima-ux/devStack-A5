const Stack = () => {
    return (
        <div className="container mx-auto border border-[#e9eef4] p-5  rounded-2xl">
            <div>
                <h2 className="text-[25px] font-bold mb-3">Your Stack</h2>
                <p className="text-[#94A3B8] text-[19px]">No technologies selected yet.</p>

                <div className="bg-white p-8 flex justify-center">
                    <button className="w-50 h-15 rounded-2xl btn btn-dash">Your stack is empty.</button>
                </div>
            </div>
        </div>
    );
};

export default Stack;