export function renderTask(item)
{
    const markup = `<input type ="checkbox">- ${item.description} - Due: ${item.dueDate}`;
    return markup;
};