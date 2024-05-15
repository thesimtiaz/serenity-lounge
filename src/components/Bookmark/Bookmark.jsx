const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div>
      <h3 className="bg-slate-100 p-6 m-4 rounded-lg">{title}</h3>
    </div>
  );
};
export default Bookmark;
