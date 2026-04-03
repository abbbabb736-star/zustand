export default function Pagination({ page, total, pageSize, onChange }) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize))

  return (
    <div className="pagination">
      <button className="button secondary" onClick={() => onChange(page - 1)} disabled={page === 1}>
        Prev
      </button>
      <span>
        {page} / {totalPages}
      </span>
      <button className="button secondary" onClick={() => onChange(page + 1)} disabled={page >= totalPages}>
        Next
      </button>
    </div>
  )
}
