export function renderTask(item)
{
    const markup = `
        <li>
            <h4>${item.priorityLevel} - ${item.taskStr} - Due: ${item.dueDate}</h4>
        </li>
    `;
    return markup;
};