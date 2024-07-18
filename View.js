import {Button} from "@nextui-org/react";
import {Input} from "@nextui-org/react";


function View()
{
    return(
       <>
 <div className="flex justify-center items-center h-screen">
  <div className="w-3/4 h-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg p-8">
    <Input
      isClearable
      type="text"
      label="enter your url"
      variant="bordered"
      placeholder="Paste link here"
      defaultValue="junior@nextui.org"
      onClear={() => console.log("input cleared")}
      className="w-full p-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
    <Button color="primary">
      Button
    </Button>
  </div>

  
</div>




       </>







    )
}
export default View;