export function renderTask(item)
{
    const markup = `
        <li>
            <input type ="checkbox">- ${item.description} - Due: ${item.dueDate}
        </li>
    `;
    return markup;
};