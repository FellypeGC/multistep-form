type UserProps = {
  data: {
    name: string;
    email: string;
  }
  updateFieldHandler: (key: string, value: string) => void;
}

const UserForm = ({ data, updateFieldHandler }: UserProps) => {
  return (
    <div>
      <div className="flex flex-col mb-4 gap-2.5">
        <label className="font-bold text-[#777] text-[.9rem]" htmlFor="name">Nome:</label>
        <input
          className="p-[.6rem] border border-gray-200 rounded-[3px] shadow-[rgba(99,99,99,.2)_0_2px_8px_0]" 
          type="text"
          name="name" 
          id="name" 
          value={data.name || ""}
          placeholder="Digite o seu nome"
          onChange={(e) => updateFieldHandler("name", e.target.value)}
          required
        />
      </div>
      <div className="flex flex-col mb-4 gap-2.5">
        <label className="font-bold text-[#777] text-[.9rem]" htmlFor="email">Email:</label>
        <input 
          className="p-[.6rem] border border-gray-200 rounded-[3px] shadow-[rgba(99,99,99,.2)_0_2px_8px_0]"
          type="email"
          name="email" 
          id="email" 
          value={data.email || ""}
          placeholder="Digite o seu email"
          onChange={(e) => updateFieldHandler("email", e.target.value)}
          required
        />
      </div>
    </div>
  )
}

export default UserForm