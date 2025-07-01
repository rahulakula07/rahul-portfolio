import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts'

export const FrontendSkillsChart = ({ data }) => (
  <BarChart width={500} height={300} data={data} className="w-full max-w-full">
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Bar dataKey="value" fill="#3B82F6" />
  </BarChart>
)

export const PieSkillChart = ({ data, colors }) => (
  <PieChart width={250} height={250}>
    <Pie
      data={data}
      cx="50%"
      cy="50%"
      labelLine={false}
      outerRadius={80}
      fill="#8884d8"
      dataKey="value"
      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
    >
      {data.map((_, index) => (
        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
      ))}
    </Pie>
    <Tooltip />
  </PieChart>
)